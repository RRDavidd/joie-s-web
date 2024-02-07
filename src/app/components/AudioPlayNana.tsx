import ReactAudioPlayer from "react-audio-player";

export default function AudioPlayNana({
  song,
  onEnded,
}: {
  song: string;
  onEnded: any;
}) {
  return (
    <div>
      <ReactAudioPlayer onEnded={onEnded} src={song} autoPlay />
    </div>
  );
}
