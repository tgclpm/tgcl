import Link from 'next/link';

import styled from './GreetingsFrame.module.css';
import VideoFrame from './VideoFrame';

import Container from 'src/components/atoms/Container';
import Typography from 'src/components/atoms/Typography';

const videos = [
    'https://www.youtube.com/embed/mllCYAKVK-4',
    'https://www.youtube.com/embed/AM7b8QBi6ZE',
    'https://www.youtube.com/embed/r_OqIhxqfL0',
    // 'https://www.youtube.com/embed/GiqvI8QTc4w',
    'https://www.youtube.com/embed/3hcilVq1q9w',
    'https://www.youtube.com/embed/RB9SHusBXCo',
];

const GreetingsFrame = () => {
    return (
        <div>
            <Container className="pb-[48px] lg:pb-[60px]">
                <div className="flex flex-col gap-[16px] pt-[0px] pb-[32px] lg:gap-[20px] lg:pt-[0px] lg:pb-[60px]">
                    <Typography variant="h2" className="!text-center lg:!text-left">
                        myseven team
                    </Typography>
                </div>

                <div className="grid gap-[20px] lg:grid-cols-2 lg:gap-[60px]">
                    {videos.map(video => (
                        <VideoFrame key={video} src={video} />
                    ))}
                </div>
                <div className={`mt-[48px] text-center lg:mt-[60px] ${styled.greetingsFrame_link}`}>
                    <Link className="text-white" target="_blank" href="https://www.myseven.io/company/our-team">
                        Explore MySeven’s team &gt;&gt;
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default GreetingsFrame;
