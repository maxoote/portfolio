import { useState, useRef, useEffect } from "react";

/**
 * A small hook to make any element draggable within the viewport. It tracks the
 * current position (in pixels) and clamps the movement so that the element
 * cannot be dragged outside of the visible browser window. The returned
 * `nodeRef` should be assigned to the root of the draggable element, and
 * `onMouseDown` should be wired to the part of the element you want to use as
 * the drag handle. This hook only activates dragging on desktop breakpoints
 * (md and above) – on smaller screens it returns no-op handlers so touch
 * scrolling remains unaffected.
 */
// Extend the type to accept numbers or percentage strings for initial positions. A percentage
// string (e.g. "50%") is resolved relative to the viewport on mount. This allows
// positioning windows using viewport percentages on both mobile and desktop.
export default function useDraggable(initialPosition: { x: number | string; y: number | string }) {
  /**
   * Parse an individual coordinate. If the value is a string ending in %, it is
   * interpreted as a percentage of the relevant viewport dimension (width for x
   * and height for y). Otherwise it is coerced to a number.
   */
  function parseCoordinate(value: number | string, dimension: number): number {
    if (typeof value === "string" && value.trim().endsWith("%")) {
      const pct = parseFloat(value) / 100;
      return pct * dimension;
    }
    return typeof value === "number" ? value : 0;
  }

  // Initialise position once the component mounts. Default to (0,0) until mounted.
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const prevPointerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // On mount, resolve percentage coordinates relative to the current viewport and
  // set the initial position. This runs only once.
  useEffect(() => {
    const resolvedX = parseCoordinate(initialPosition.x, window.innerWidth);
    const resolvedY = parseCoordinate(initialPosition.y, window.innerHeight);
    setPosition({ x: resolvedX, y: resolvedY });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update the window position while dragging. Pointer events unify mouse and touch
  // handling across devices. Movement is calculated from the difference between
  // the current pointer coordinates and the last stored pointer position.
  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      if (!dragging || !nodeRef.current) return;
      const dx = e.clientX - prevPointerPos.current.x;
      const dy = e.clientY - prevPointerPos.current.y;
      prevPointerPos.current = { x: e.clientX, y: e.clientY };
      const { offsetWidth, offsetHeight } = nodeRef.current;
      const maxX = window.innerWidth - offsetWidth;
      const maxY = window.innerHeight - offsetHeight;
      setPosition((prev) => {
        const newX = Math.min(Math.max(prev.x + dx, 0), maxX);
        const newY = Math.min(Math.max(prev.y + dy, 0), maxY);
        return { x: newX, y: newY };
      });
    }
    function handlePointerUp() {
      setDragging(false);
    }
    if (dragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging]);

  /**
   * Start the drag operation. This handler stores the pointer position when the
   * drag begins and sets the dragging flag. It should be attached to the
   * pointer down event on the draggable element. Using pointer events allows
   * dragging on both mouse and touch devices.
   */
  const onPointerDown = (e: React.PointerEvent) => {
    // Only allow dragging on medium and larger breakpoints. This prevents
    // interfering with touch scrolling on smaller screens. Use the
    // viewport width check to match Tailwind's md breakpoint (768px).
    if (window.innerWidth >= 768) {
      setDragging(true);
      prevPointerPos.current = { x: e.clientX, y: e.clientY };
    }
  };

  return { nodeRef, position, onPointerDown };
}