import { Button, Navbar, Alignment, InputGroup } from '@blueprintjs/core';
import Link from 'next/link';
import { useCallback, FormEvent, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function MyNavbar() {
  const [searchString, setSearchString] = useState('');
  const router = useRouter();
  const handleSubmitSearch = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();

      router.push('/movies?search=' + searchString);
      setSearchString('');
    },
    [searchString],
  );
  const handleClickMovies = useCallback(() => {
    if (router.pathname.startsWith('/movies')) {
      return;
    }
    router.push('/movies');
  }, [router.pathname]);

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

          <Button className="bp3-minimal" icon="build" onClick={handleClickMovies}>
            Movies
          </Button>

          <Link href="/counter">
            <Button className="bp3-minimal" icon="build">
              Counter
            </Button>
          </Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <form onSubmit={handleSubmitSearch}>
            <InputGroup
              id="navbar_search_input"
              leftIcon="search"
              type="search"
              placeholder="e.g. Frozen"
              value={searchString}
              onChange={e => {
                setSearchString(e.target.value);
              }}
            />
          </form>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}
