import ReactAudioPlayer from "react-audio-player";

export default function AudioPlaySpook({ onEnded }: { onEnded: any }) {
  return (
    <div>
      <ReactAudioPlayer onEnded={onEnded} src={"/@/../fart-05.mp3"} autoPlay />
    </div>
  );
}
