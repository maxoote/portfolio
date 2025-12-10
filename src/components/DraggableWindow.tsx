import React from "react";
import useDraggable from "./useDraggable";

interface DraggableWindowProps {
  /**
   * The default position for the window when it first renders. You can
   * specify pixel values (e.g. { x: 100, y: 200 }) or percentage strings
   * (e.g. { x: "50%", y: "25%" }). Percentages are resolved relative to the
   * viewport dimensions on mount.
   */
  defaultPosition: { x: number | string; y: number | string };
  /**
   * Child component representing the window. This is typically your Window
   * component containing a title bar and content. The child should accept
   * className and style props for positioning.
   */
  children: React.ReactNode;
  /**
   * Optional className to apply to the wrapper div. Useful for adding
   * z-index or responsive visibility classes.
   */
  className?: string;
  /**
   * Additional inline styles to override the wrapper style. The position
   * computed by the hook will always win, but you can set other styles here.
   */
  style?: React.CSSProperties;
}

/**
 * A wrapper component that makes its contents draggable on desktop. On
 * breakpoint widths below 768px (md), the wrapper simply renders its
 * children without any positioning so that the mobile layout can take over.
 * The element is positioned absolutely relative to the viewport; to confine
 * movement within a smaller container, ensure the parent has a non-static
 * position (e.g. `relative`). See MDN for details on positioning contexts
 *【17819995675617†L468-L485】.
 */
export default function DraggableWindow({
  defaultPosition,
  children,
  className = "",
  style = {},
}: DraggableWindowProps) {
  const { nodeRef, position, onPointerDown } = useDraggable(defaultPosition);

  // On small screens we skip absolute positioning so the layout falls back to
  // whatever parent styles apply (e.g. flex or grid). This means dragging is
  // disabled on mobile for better usability.
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div
      ref={nodeRef}
      onPointerDown={onPointerDown}
      className={`${isDesktop ? "absolute" : ""} ${className}`}
      style={
        isDesktop
          ? { ...style, top: position.y, left: position.x }
          : style
      }
    >
      {children}
    </div>
  );
}