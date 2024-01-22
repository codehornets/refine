import React from "react";

const SvgTailwindCss = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path
            fill="#38BDF8"
            fillRule="evenodd"
            d="M12 5C8.8 5 6.8 6.59 6 9.771c1.2-1.59 2.6-2.186 4.2-1.789.913.227 1.566.885 2.287 1.614 1.177 1.187 2.539 2.56 5.513 2.56 3.2 0 5.2-1.59 6-4.77-1.2 1.59-2.6 2.187-4.2 1.789-.913-.227-1.566-.885-2.288-1.614C16.336 6.373 14.974 5 12 5Zm-6 7.157c-3.2 0-5.2 1.59-6 4.771 1.2-1.59 2.6-2.187 4.2-1.79.913.228 1.566.886 2.288 1.615 1.176 1.187 2.538 2.56 5.512 2.56 3.2 0 5.2-1.59 6-4.77-1.2 1.59-2.6 2.186-4.2 1.789-.913-.227-1.566-.886-2.287-1.614C10.336 13.53 8.974 12.157 6 12.157Z"
            clipRule="evenodd"
        />
    </svg>
);

export default SvgTailwindCss;