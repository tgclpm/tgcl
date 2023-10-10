import NextImage from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {FC} from 'react';

import {Carousel as ReactCarousel} from 'react-responsive-carousel';

import {CarouselProps} from 'react-responsive-carousel/lib/ts/components/Carousel/types';

import arrow from './arrow.svg';

const ArrowPrev = (clickHandler: () => void) => (
    <button
        className="btn-free absolute top-[calc(50%-25px)] left-0 z-[5] hidden h-[50px] w-[50px] items-center justify-center rounded-full bg-white hover:bg-[#CED7E2] lg:flex"
        onClick={clickHandler}
    >
        <div className="relative h-[12px] w-[6px]">
            <NextImage src={arrow} alt="arrow" fill />
        </div>
    </button>
);

const ArrowNext = (clickHandler: () => void) => (
    <button
        className="btn-free absolute top-[calc(50%-25px)] right-0 z-[5] hidden h-[50px] w-[50px] items-center justify-center rounded-full bg-white hover:bg-[#CED7E2] lg:flex"
        onClick={clickHandler}
    >
        <div className="relative h-[12px] w-[6px]">
            <NextImage src={arrow} alt="arrow" className="rotate-180" fill />
        </div>
    </button>
);

interface ICarouselProps extends Partial<CarouselProps> {
    className?: string;
}

const Carousel: FC<ICarouselProps> = ({
    children,
    className = '',
    showStatus = false,
    infiniteLoop = true,
    renderArrowPrev = ArrowPrev,
    renderArrowNext = ArrowNext,
    ...rest
}) => {
    return (
        <>
            <div className={`relative lg:pb-[5px] ${className}`}>
                <ReactCarousel
                    renderArrowPrev={renderArrowPrev}
                    renderArrowNext={renderArrowNext}
                    showStatus={showStatus}
                    infiniteLoop={infiniteLoop}
                    {...rest}
                >
                    {children}
                </ReactCarousel>
            </div>
            <style>{`
                .slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .carousel {
                    overflow: inherit !important;
                }
                .control-dots {
                    bottom: -50px !important;
                }
                .dot {
                    background: rgba(255,255,255,0.3) !important;
                }
                .dot.selected {
                    background: linear-gradient(90deg, #1282E4 0%, #0FD3E1 100%) !important;
                }
                @media (min-width: 1024px) {
                    .control-dots {
                        bottom: -60px !important
                    }
                }
            `}</style>
        </>
    );
};

export default Carousel;
