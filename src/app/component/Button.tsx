import React from 'react';
import Image from 'next/image';

type ButtonProps = {
  label: string; // النص الذي يظهر داخل الزر
  iconUrl: string ; // رابط الأيقونة (إما نص أو استيراد ثابت)
};

const Button: React.FC<ButtonProps> = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none box-border bg-[#8a5aff] hover:bg-white hover:border-[#8a5aff] hover:text-[#8a5aff] border-2 rounded-full text-white">
      {label}
      {iconUrl && (
        <Image
          className="ml-2 rounded-full"
          src={iconUrl}
          alt="icon"
          width={20}
          height={20} // يجب تحديد الأبعاد
        />
      )}
    </button>
  );
};

export default Button;
