import {FC} from 'react';

interface Props {
    src: string;
}

const VideoFrame: FC<Props> = ({src}) => {
    return (
        <div className="max-h-[254px]">
            <div className="aspect-h-9 aspect-w-16 mx-auto !max-h-[254px] !max-w-[450px]">
                <iframe
                    width="100%"
                    height="100%"
                    src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="max-h-[254px] max-w-[450px]"
                />
            </div>
        </div>
    );
};

export default VideoFrame;
