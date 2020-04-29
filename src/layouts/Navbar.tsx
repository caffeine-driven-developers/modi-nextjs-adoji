import { Button, Navbar, Alignment } from '@blueprintjs/core';
import Link from 'next/link';

export default function MyNavbar() {
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Link href="/">
            <Navbar.Heading>
              <Button className="bp3-minimal">Modi</Button>
            </Navbar.Heading>
          </Link>

          <Navbar.Divider />

          <Link href="/counter">
            <Button className="bp3-minimal" icon="build">
              Counter
            </Button>
          </Link>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}
