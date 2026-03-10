import { useEffect, useRef } from "react"

const FOCUSABLE = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ")

/**
 * Focus trap for modal/lightbox.
 * - Tab / Shift+Tab cycle through focusable elements inside the container
 * - Escape calls onClose and restores focus to the trigger element
 * - ArrowLeft / ArrowRight call onPrev / onNext (optional)
 */
export function useFocusTrap(
  active: boolean,
  onClose: () => void,
  onPrev?: () => void,
  onNext?: () => void
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  // Save trigger focus + focus first element on open; restore on close
  useEffect(() => {
    if (active) {
      triggerRef.current = document.activeElement as HTMLElement
      requestAnimationFrame(() => {
        const els = containerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
        els?.[0]?.focus()
      })
    } else {
      triggerRef.current?.focus()
      triggerRef.current = null
    }
  }, [active])

  // Keyboard handler
  useEffect(() => {
    if (!active) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === "ArrowLeft") { e.preventDefault(); onPrev?.(); return }
      if (e.key === "ArrowRight") { e.preventDefault(); onNext?.(); return }

      if (e.key === "Tab") {
        const container = containerRef.current
        if (!container) return
        const els = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (!els.length) { e.preventDefault(); return }
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [active, onClose, onPrev, onNext])

  return containerRef
}
