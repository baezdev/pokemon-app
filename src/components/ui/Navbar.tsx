import { Link, Navbar as Nav, Text } from "@nextui-org/react";

export const Navbar = () => {
  return (
    <Nav isBordered variant="static" style={{ padding: "20px 0" }}>
      <Nav.Brand>
        <Link href="/">
          <Text h3>Pokemon</Text>
        </Link>
        {/* <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="Imagen pokemon"
          width={100}
          height={100}
        /> */}
      </Nav.Brand>
      <Nav.Content>
        <Link href="/favorites" block color="warning">
          Favorites
        </Link>
      </Nav.Content>
    </Nav>
  );
};
