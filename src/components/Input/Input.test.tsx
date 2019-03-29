import React from 'react';

import { render, fireEvent, waitForElement } from 'react-testing-library';
import Input from './Input';

describe('<Input />', () => {
  const placeholder : string = 'Input Placeholder';
  const value : string= '';
  const type  : string= 'text';
  const name  : string= 'test';
  const newValue  : string= 'Testing onChange event';
  const setHook = jest.fn();
  const { getByPlaceholderText } = render(
    <Input
      type={type}
      setHook={setHook}
      value={value}
      placeholder={placeholder}
      name={name}
    />
  );
  it('should render with the correct name,placeholder,value,className and type', async () => {
    const inputElement = await waitForElement(
      () => getByPlaceholderText(placeholder) as HTMLInputElement
    );
    expect(inputElement).toBeTruthy;
    expect(inputElement.value).toEqual(value);
    expect(inputElement.className).toEqual('input');
    expect(inputElement.type).toEqual(type);
    expect(inputElement.name).toEqual(name);
  });
  describe('onChange Event', () => {
    beforeEach(() => {
      const inputElement = getByPlaceholderText(
        placeholder
      ) as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: newValue } });
    });
    it('setHook should be called', () => {
      expect(setHook).toBeCalled();
      expect(setHook).toBeCalledTimes(1);
    });
  });
});
