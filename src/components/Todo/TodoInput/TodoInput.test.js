import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import TodoInput from './TodoInput';

const placeholderText = 'Your todo';
const userTypeText = 'example todo';

test('should render input with placeholder', () => {
  render(<TodoInput />);

  expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
});

test('should render button with type "submit"', () => {
  render(<TodoInput />);

  expect(screen.getByText('Add')).toHaveAttribute('type', 'submit');
});

test('should have value with what the user type', () => {
  render(<TodoInput />);

  const inputElement = screen.getByPlaceholderText(placeholderText);

  UserEvent.type(inputElement, userTypeText);

  expect(inputElement.value).toBe(userTypeText);
});

test('should submit if todo is not an empty string', () => {
  const mockOnSubmitTodo = jest.fn();
  render(<TodoInput onSubmitTodo={mockOnSubmitTodo} />);

  const inputElement = screen.getByPlaceholderText(placeholderText);

  UserEvent.type(inputElement, userTypeText);
  UserEvent.type(inputElement, '{enter}');

  expect(mockOnSubmitTodo).toHaveBeenCalledTimes(1);
  expect(mockOnSubmitTodo).toHaveBeenCalledWith(userTypeText);
});

test('should submit if the user click "Add" button', () => {
  const mockOnSubmitTodo = jest.fn();
  render(<TodoInput onSubmitTodo={mockOnSubmitTodo} />);

  const inputElement = screen.getByPlaceholderText(placeholderText);
  const buttonElement = screen.getByText('Add');

  UserEvent.type(inputElement, userTypeText);
  UserEvent.click(buttonElement);

  expect(mockOnSubmitTodo).toHaveBeenCalledTimes(1);
  expect(mockOnSubmitTodo).toHaveBeenCalledWith(userTypeText);
});

test('should not submit if todo is an empty string', () => {
  const mockOnSubmitTodo = jest.fn();
  render(<TodoInput onSubmitTodo={mockOnSubmitTodo} />);

  const inputElement = screen.getByPlaceholderText(placeholderText);

  UserEvent.type(inputElement, '');
  UserEvent.type(inputElement, '{enter}');

  expect(mockOnSubmitTodo).not.toBeCalled();
});
