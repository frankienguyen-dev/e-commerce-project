import React, { useState, useRef, useId, ElementType } from 'react';
import { Link } from 'react-router-dom';
import { useFloating, FloatingPortal, arrow, shift, offset } from '@floating-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { render } from 'react-dom';

interface Props {
  children: React.ReactNode;
  renderPopover: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Popover({
  children,
  renderPopover,
  className,
  as: Element = 'div'
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<HTMLElement>(null);
  const id = useId();
  const { x, y, strategy, refs, middlewareData } = useFloating({
    middleware: [
      offset(6),
      shift(),
      arrow({
        element: arrowRef
      })
    ]
  });

  const showPopover = () => {
    setIsOpen(true);
  };

  const hidePopover = () => {
    setIsOpen(false);
  };
  return (
    <Element
      className={className}
      ref={refs.setReference}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className='absolute z-10 translate-y-[-95%] border-[11px] border-x-transparent
                     border-b-white border-t-transparent '
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              ></span>

              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  );
}
