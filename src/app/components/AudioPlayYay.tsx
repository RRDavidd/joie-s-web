import ReactAudioPlayer from "react-audio-player";

export default function AudioPlayYay({ onEnded }: { onEnded: any }) {
  return (
    <div>
      <ReactAudioPlayer onEnded={onEnded} src={"/@/../yipee.mp3"} autoPlay />
    </div>
  );
}
