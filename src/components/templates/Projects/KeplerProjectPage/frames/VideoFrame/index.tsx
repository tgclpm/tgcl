import classes from './Video.module.css';

import Container from 'src/components/atoms/Container';

export default function VideoFrame() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.radial_bg} />
            <Container>
                <div className="aspect-h-9 aspect-w-16 flex w-full">
                    <iframe
                        title="YouTube video player"
                        src="https://www.youtube.com/embed/PbeQxBis9jI"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        width="100%"
                        height="100%"
                    />
                </div>
            </Container>
        </div>
    );
}
