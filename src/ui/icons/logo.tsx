const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="350"
      height="350"
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="350" height="350" rx="20" fill="black" />
      <path
        d="M115 122.778H52.7778C51.2441 122.778 50 124.021 50 125.556V280C50 284.602 53.731 288.333 58.3335 288.333H115C116.534 288.333 117.778 287.09 117.778 285.556V125.556C117.778 124.021 116.534 122.778 115 122.778ZM93.8911 254.444H73.8911C69.2891 254.444 65.5576 250.713 65.5576 246.111C65.5576 241.508 69.2886 237.777 73.8911 237.777H93.8911C98.4932 237.777 102.225 241.508 102.225 246.111C102.225 250.713 98.4936 254.444 93.8911 254.444ZM93.8911 213.889H73.8911C69.2891 213.889 65.5576 210.158 65.5576 205.555C65.5576 200.953 69.2886 197.222 73.8911 197.222H93.8911C98.4932 197.222 102.225 200.953 102.225 205.555C102.225 210.158 98.4936 213.889 93.8911 213.889ZM93.8911 173.334H73.8911C69.2891 173.334 65.5576 169.603 65.5576 165C65.5576 160.397 69.2886 156.667 73.8911 156.667H93.8911C98.4932 156.667 102.225 160.397 102.225 165C102.225 169.603 98.4936 173.334 93.8911 173.334Z"
        fill="white"
      />
      <path
        d="M291.667 61.6665H58.3335C53.731 61.6665 50 65.3979 50 70V103.333C50 104.867 51.2437 106.111 52.7778 106.111H297.222C298.756 106.111 300 104.868 300 103.333V70C300 65.3979 296.269 61.6665 291.667 61.6665ZM81.6665 89.4443C78.5981 89.4443 76.1108 86.957 76.1108 83.8887C76.1108 80.8203 78.5981 78.333 81.6665 78.333C84.7349 78.333 87.2222 80.8203 87.2222 83.8887C87.2222 86.957 84.7349 89.4443 81.6665 89.4443ZM103.889 89.4443C100.82 89.4443 98.333 86.957 98.333 83.8887C98.333 80.8203 100.82 78.333 103.889 78.333C106.957 78.333 109.444 80.8203 109.444 83.8887C109.444 86.957 106.957 89.4443 103.889 89.4443ZM126.111 89.4443C123.043 89.4443 120.556 86.957 120.556 83.8887C120.556 80.8203 123.043 78.333 126.111 78.333C129.18 78.333 131.667 80.8203 131.667 83.8887C131.667 86.957 129.179 89.4443 126.111 89.4443Z"
        fill="white"
      />
      <path
        d="M297.222 122.778H137.222C135.688 122.778 134.444 124.021 134.444 125.556V285.556C134.444 287.089 135.688 288.333 137.222 288.333H291.667C296.269 288.333 300 284.603 300 280V125.556C300 124.021 298.756 122.778 297.222 122.778ZM247.778 227.778V250C247.778 254.602 244.047 258.333 239.444 258.333H195C190.398 258.333 186.667 254.603 186.667 250V227.778C186.667 219.028 190.369 211.131 196.283 205.556C176.173 186.595 189.709 152.778 217.222 152.778C244.759 152.778 258.249 186.617 238.161 205.556C244.075 211.131 247.778 219.028 247.778 227.778Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
