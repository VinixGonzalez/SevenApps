import * as React from "react";
import { shallow } from "enzyme";
import Pagination from "../../components/Footer";

const props = {
  onChange: jest.fn(),
  activePage: 1,
  itemsCountPerPage: 20,
  totalItemsCount: 500,
  pageRangeDisplayed: 11,
  title: "pagination",
};

test("should render the pagination given the props", () => {
  const component = shallow(<Pagination {...props} />);

  expect(component).toMatchSnapshot();
});
