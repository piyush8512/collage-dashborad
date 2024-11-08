// import Link from 'next/link';
// import Image from 'next/image';

// const menuItems = [
//   {
//     title: "MENU",
//     items: [
//       {
//         icon: "/home.png",
//         label: "Home",
//         href: "/",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/teacher.png",
//         label: "Teachers",
//         href: "/list/teachers",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/student.png",
//         label: "Students",
//         href: "/list/students",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/parent.png",
//         label: "Parents",
//         href: "/list/parents",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/subject.png",
//         label: "Subjects",
//         href: "/list/subjects",
//         visible: ["admin"],
//       },
//       {
//         icon: "/class.png",
//         label: "Classes",
//         href: "/list/classes",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/lesson.png",
//         label: "Lessons",
//         href: "/list/lessons",
//         visible: ["admin", "teacher"],
//       },
//       {
//         icon: "/exam.png",
//         label: "Exams",
//         href: "/list/exams",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/assignment.png",
//         label: "Assignments",
//         href: "/list/assignments",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/result.png",
//         label: "Results",
//         href: "/list/results",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/attendance.png",
//         label: "Attendance",
//         href: "/list/attendance",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/calendar.png",
//         label: "Events",
//         href: "/list/events",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/message.png",
//         label: "Messages",
//         href: "/list/messages",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/announcement.png",
//         label: "Announcements",
//         href: "/list/announcements",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//     ],
//   },
//   {
//     title: "OTHER",
//     items: [
//       {
//         icon: "/profile.png",
//         label: "Profile",
//         href: "/profile",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/setting.png",
//         label: "Settings",
//         href: "/settings",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//       {
//         icon: "/logout.png",
//         label: "Logout",
//         href: "/logout",
//         visible: ["admin", "teacher", "student", "parent"],
//       },
//     ],
//   },
// ];


// import React from 'react'

// const Menu = () => {
//   return (
//     <div className='mt-2 text-xs'>
//       {menuItems.map(i=>(
//         <div className='flex flex-col gap-2' key={i.title}>
//           <span className='hidden lg:block text-gray-400 font-light my-4'>{i.title}</span>
//           {i.items.map(item=>(
//             <Link href={item.href} key={item.label} className = "flex items-center justify-center lg:justify-start gap-4">
//               <Image src={item.icon} alt={item.label} width={20} height={20}/>
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Menu




import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      // Add other menu items here...
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // Add other items here...
    ],
  },
];

const Menu = () => {
  return (
    <div className="relative">
      {/* Container for hover effect */}
      <div className="group hover:w-64 w-16 transition-all duration-300 ease-in-out bg-gray-800 text-white h-screen">
        {/* Menu items */}
        <div className="mt-2 text-xs">
          {menuItems.map((i) => (
            <div className="flex flex-col gap-2" key={i.title}>
              <span className="hidden lg:block text-gray-400 font-light my-4 group-hover:block">{i.title}</span>
              {i.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20} />
                  {/* Only show label when hovered */}
                  <span className="hidden group-hover:block">{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
