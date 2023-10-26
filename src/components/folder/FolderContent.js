import '../../styles/sharedContent.css';
import { useState, useEffect, useCallback } from 'react';
import { getData } from '../../utils/getData';
import { PATH } from '../../constants/path';
import SearchBar from '../SearchBar.js';
import FolderNav from './FolderNav';
import AddFolderBtn from './AddFolderBtn';
import styled from 'styled-components';
import CardList from '../shared/CardList';
import FolderTitle from './FolderTitle';
import ChoiceBar from './ChoiceBar';

const NavContainer = styled.div`
  padding: 40px 0 0;
  display: flex;
  justify-content: space-between;
`;

const NoLinkMsg = styled.div`
  padding: 100px 0;
  text-align: center;
  font-size: 1.6rem;
  line-height: 24px;
`;

const TitleContainer = styled.div`
  padding: 24px 0 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`;

function FolderContent() {
  const [folders, setFolders] = useState(null);
  const [folder, setFolder] = useState(-1);
  const [links, setLinks] = useState(null);

  const handleChangeFolderAll = useCallback(() => {
    setFolder(-1);
    getData(setLinks, 'users/1/links');
  }, [links]);

  const handleChangeFolder = useCallback(
    (id) => {
      setFolder(id);
      getData(setLinks, 'users/1/links', `?folderId=${id}`);
    },
    [folder]
  );

  function onChangeFolder(id) {
    return id;
  }

  useEffect(() => {
    getData(setFolders, PATH.users[1].folders);
    getData(setLinks, PATH.users[1].links);
  }, []);

  return (
    <main>
      <div className="content_container">
        <SearchBar />
        {folders ? (
          <>
            <NavContainer>
              <FolderNav folders={folders} selectedFolderId={folder} onChangeFolder={handleChangeFolder} onChangeFolderAll={handleChangeFolderAll} />
              <AddFolderBtn />
            </NavContainer>
            <TitleContainer>
              <FolderTitle folders={folders} selectedFolderId={folder} />
              {folder !== -1 && <ChoiceBar />}
            </TitleContainer>
            <CardList linksData={links} />
          </>
        ) : (
          <NoLinkMsg>저장된 링크가 없습니다.</NoLinkMsg>
        )}
      </div>
    </main>
  );
}

export default FolderContent;
