import React, { useEffect, useState, useCallback } from "react";

import { Logo } from "../../styles/global";
import {
  Content,
  Main,
  Form,
  FormGroup,
  Input,
  Button,
  Loading,
} from "./styles";
import SevenAppsLogo from "../../assets/sevenAppsLogo.png";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";
import API from "../../services";

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    usersPerPage: 20,
  });
  const [loading, setLoading] = useState(false);
  const [nameSearched, setNameSearched] = useState("");
  const [ageSearched, setAgeSearched] = useState("");
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      await API.get("/users")
        .then((res) => {
          setUserList(res.data.data);
          setOriginalList(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    getData();
  }, [setLoading]);

  const handlePaginate = useCallback(
    (pageNum) => {
      setPagination({ ...pagination, currentPage: pageNum });
    },
    [pagination]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!nameSearched && !ageSearched) {
      setUserList(originalList);
      return;
    }

    let usersFiltered = [];

    if (nameSearched && ageSearched) {
      usersFiltered = originalList.filter(
        ({ name, age }) =>
          name.toLowerCase().includes(nameSearched.toLowerCase()) &&
          age === +ageSearched
      );
    } else if (nameSearched && !ageSearched) {
      usersFiltered = originalList.filter(({ name, age }) =>
        name.toLowerCase().includes(nameSearched.toLowerCase())
      );
    } else {
      usersFiltered = originalList.filter(
        ({ name, age }) => age === +ageSearched
      );
    }

    setUserList(usersFiltered);
  };

  const handleAgeKeyUp = (evt) => {
    let value = evt.target.value;
    value = value.replace(/\D/g, "");
    evt.target.value = value;
    return evt;
  };

  const { currentPage, usersPerPage } = pagination;

  const indexOfLastUsers = currentPage * usersPerPage;
  const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  const currentUsers = userList.slice(indexOfFirstUsers, indexOfLastUsers);

  return (
    <Content>
      <Logo src={SevenAppsLogo} alt="logo" title="❤" />
      <h1>SevenApps - User Search</h1>

      {!loading ? (
        <>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                placeholder="Name"
                name="name"
                onChange={(evt) => setNameSearched(evt.target.value)}
                value={nameSearched}
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder="Age"
                name="age"
                onChange={(evt) => setAgeSearched(evt.target.value)}
                onKeyUp={handleAgeKeyUp}
                value={ageSearched}
                maxLength={3}
              />
            </FormGroup>
            <Button type="submit">Search</Button>
          </Form>

          <Main>
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
                <Card key={index}>
                  <h3>{user.name}</h3>
                  <span>
                    <small>age - </small>
                    {user.age}
                  </span>
                  <span>
                    <small>born at</small> {new Date().getFullYear() - user.age}
                  </span>
                </Card>
              ))
            ) : (
              <div>No users found.</div>
            )}
          </Main>
          {currentUsers.length > 0 && (
            <Pagination
              currentPage={currentPage}
              usersPerPage={usersPerPage}
              totalUsers={userList.length}
              handlePageChange={handlePaginate}
            />
          )}
        </>
      ) : (
        <Loading>
          <h3>Loading...</h3>
        </Loading>
      )}
    </Content>
  );
};

export default Home;
