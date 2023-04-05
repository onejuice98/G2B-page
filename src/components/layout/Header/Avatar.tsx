interface AvatarProps {
  alt: string;
  src?: string;
}
const Avatar = ({ alt, src }: AvatarProps) => {
  return (
    <div className="flex rounded-full w-8 h-8 bg-gray-400 justify-center items-center">
      <span className="font-bold text-white">{alt[0].toUpperCase()}</span>
    </div>
  );
};
export default Avatar;
