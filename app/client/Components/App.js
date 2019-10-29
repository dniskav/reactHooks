import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import styled from 'styled-components';
import Authors from '../Components/Authors';
import { fecthAuthors } from '../Actions/authors';
import Publications from './Publications';

const AppContainer = styled.div`
  max-width: 920px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px auto;
  box-shadow: 0px 0px 10px -5px #000000;
};


`;

const App = () => {
  const authors = useSelector(state => state.authors);
  const authorsLoader = useSelector(state => state.authorsLoader);
  const publicationsByAuthor = useSelector(state => state.publications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthAuthors(dispatch));
  }, []);

  const { publications, firstName, lastName, email } = publicationsByAuthor;

  return (
    <AppContainer>
      <Row type="flex" justify="space-around" align="top" width={720}>
      <Col span={4}></Col>
      <Col span={20}>
        <Input placeholder="Search" />
      </Col>
      </Row>
      <Row>
        <Col span={4}>
          {authorsLoader ? <span>Loading...</span> : <Authors authorsList={authors} />}
        </Col>
        <Col span={20}>
          <Publications
            list={publications}
            authorName={`${firstName} ${lastName}`}
            authorEmail={email}
          />
        </Col>
      </Row>
    </AppContainer>
  );
}

export default App
