import React from "react";

require("@/lib/font")

interface IProps {
    type: string
}

export default function Icon(props: IProps) {
    return (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#${props.type}`} />
            <style>{`
                    .icon {
                        width: 1em; height: 1em;
                        vertical-align: -0.15em;
                        fill: currentColor;
                        overflow: hidden;
                    }`
            }</style>
        </svg>

    )
}
