import Image from "next/image";
import Link from "next/link";

export default function Engine({ name, image, link, selected }) {
  return (
    <Link href={link}>
      <a
        style={{
          backgroundColor: selected
            ? "rgba(125, 125, 125, 0.5)"
            : "rgba(1, 1, 1, 0)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          cursor: "pointer",
          borderStyle: "solid",
          borderWidth: "0px 0px 3px 0px",
          borderColor: "black",
        }}
      >
        <Image
          src={image}
          width={75}
          height={75}
          style={{ borderRadius: "50%", padding: 10 }}
        />
        <h2 style={{ paddingLeft: 40 }}>{name}</h2>
      </a>
    </Link>
  );
}
