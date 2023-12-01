function BtnNav({ icon, actionType }: { icon: string; actionType: string }) {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-btn-white-bg shadow-shdw-main">
      <img src={icon} alt={`${actionType} Icon`} />
    </button>
  );
}

export default BtnNav;
