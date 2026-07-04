import { VideoPlayer } from "@/components/videoPlayer/VideoPlayer";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>Welcome to My App</h1>
          <VideoPlayer src="https://contraponto-streaming-bucket.s3.us-east-1.amazonaws.com/streams/1b99b7c5-8254-4de6-b137-44bb68addfb3/playlist.m3u8" />
        </div>
      </main>
    </div>
  );
}
