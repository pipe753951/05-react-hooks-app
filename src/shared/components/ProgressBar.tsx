interface Props {
  value: number;
  max?: number;

  label?: string;
  className?: string;
}

export const ProgressBar = function (props: Props) {
  const { value, max = 100, label, className = "" } = props;
  const percentage = (value / max) * 100;

  return (
    <div
      className={className
        ?.concat(" ", "w-64 h-2 bg-slate-900 rounded-full")
        .trim()}
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuetext={`${value} to ${max}`}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
