export default function Divider({ color }: { color?: string }) {
  return (
    <div className="flex flex-row w-full items-center">
      <div className={`basis-2.5 min-h-px bg-${color ? color : 'white'}`}></div>
      <div className={`text-3xl min-h-px text-${color ? color : 'white'}`}>☆</div>
      <div className={`flex-1  min-h-px bg-${color ? color : 'white'}`}></div>
    </div>
  )
}
