import { useRef } from "react";
import { LinearSearchAnimation } from "./animation/LinearSearchAnimation";

export default function LinearSearch() {

    const root = useRef<HTMLDivElement | null>(null);

    return <div ref={root} className="w-full h-full flex items-center justify-center">
        <LinearSearchAnimation
            root={root}
        />
    </div>
}