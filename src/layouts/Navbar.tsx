import Link from 'next/link';
import { useCallback, FormEvent, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Layout, Menu, Input } from 'antd';
const { Header } = Layout;

export default function MyNavbar() {
  const [searchString, setSearchString] = useState('');
  const router = useRouter();
  const handleSubmitSearch = useCallback(
    (_: string, evt: FormEvent) => {
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
    <Header>
      <div id="logo"></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['movies']}>
        <Menu.Item key="movies" onClick={handleClickMovies}>
          movies
        </Menu.Item>

        <Menu.Item key="counter">
          <Link href="/counter">counter</Link>
        </Menu.Item>
        <div style={{ float: 'right' }}>
          <Input.Search
            id="navbar_search_input"
            style={{ width: 200, paddingTop: '16px' }}
            enterButton
            onSearch={handleSubmitSearch}
            onChange={e => setSearchString(e.target.value)}
            value={searchString}
            placeholder="e.g. Frozen"
          />
        </div>
      </Menu>
      <style jsx>{`
        #logo {
          width: 120px;
          height: 31px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px 24px 16px 12px;
          float: left;
          text-align: center;
        }
      `}</style>
    </Header>
    /* <Navbar>
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
      </Navbar> */
  );
}
