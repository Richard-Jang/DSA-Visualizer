import { animate, createScope } from "animejs";
import { useEffect, useRef, type RefObject } from "react";

export function LinearSearchAnimation({
    root,
}: {
    root: RefObject<HTMLDivElement | null>,
}) {
    const scope = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!scope.current) return;
        animate(
            scope.current,
            {
                rotate: 360,
                loop: true,
                duration: 2000,
                easing: "easeInOutSine",
            }
        )
    }, []);

    return <div ref={scope} className="balls w-16 aspect-square bg-white rounded-lg">
        
    </div>
    
}