import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from './App';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(
      <App 
        initialWidth={4}
        initialHeight={4}
        cellSize={50}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('buttons', () => {
  const onClick = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App onClick={onClick} /> );
  })

  it('addRowButton works', () => {
    const button = wrapper.find('#addRowButton');    
    button.simulate('click')
    expect(wrapper.find('#addRowButton').props().tableHeight).toEqual(5);
  })

  it('addColumnButton works', () => {
    const button = wrapper.find('#addColumnButton');
    button.simulate('click')
    expect(wrapper.find('#addColumnButton').props().tableWidth).toEqual(5);
  })

  it('deleteColumnButton works', () => {
    const button = wrapper.find('#deleteColumnButton');    
    button.simulate('click')
    expect(wrapper.find('#deleteColumnButton').props().tableWidth).toEqual(3);
  })

  it('deleteColumnButton works', () => {
    const button = wrapper.find('#deleteColumnButton');    
    button.simulate('click')
    expect(wrapper.find('#deleteColumnButton').props().tableWidth).toEqual(3);
  })

  it('last row not removed', () => {
    const button = wrapper.find('#deleteRowButton');    
    button.simulate('click')
    button.simulate('click')
    button.simulate('click')
    expect(wrapper.find('#deleteRowButton').props().isOnlyOneRow()).toEqual(true);
    expect(wrapper.find('#deleteRowButton').props().isDeleteRowButtonHidden).toEqual(true);
  })

  it('last column not removed', () => {
    const button = wrapper.find('#deleteColumnButton');    
    button.simulate('click')
    button.simulate('click')
    button.simulate('click')
    expect(wrapper.find('#deleteColumnButton').props().isOnlyOneColumn()).toEqual(true);
    expect(wrapper.find('#deleteColumnButton').props().isDeleteColumnButtonHidden).toEqual(true);
  })

});
