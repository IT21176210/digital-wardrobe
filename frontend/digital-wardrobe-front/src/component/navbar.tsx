import { Text } from "@radix-ui/themes";
import { FaShirt } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const navbar = () => {
  const navigator = useNavigate();
  const NavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cloths",
      link: "/cloths",
    },
  ];

  return (
    <nav className=" flex items-center justify-between h-16 border-red-500 border-2 p-6 mb-5 mt-1">
      <div className=" flex flex-col items-center ">
        <FaShirt
          color="#436D83"
          size={40}
          onClick={() => {
            navigator("/");
          }}
        />
        <Text>Wardrobe</Text>
      </div>

      <ul className=" flex gap-x-4 text-xl ">
        {NavLinks.map((navlinks, index) => (
          <li key={index} className=" hover:underline  hover:font-medium">
            <Link to={navlinks.link}>{navlinks.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navbar;
