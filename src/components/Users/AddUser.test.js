import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddUser from '../Users/AddUser';
import '@testing-library/jest-dom';

describe('Add User: Basic', () => {
  it('creates the component', () => {
    render(<AddUser />);
    expect(screen.getByTestId('label_username')).toBeInTheDocument();
    expect(screen.getByTestId('label_age')).toBeInTheDocument();
    expect(screen.getByTestId('input_username')).toBeInTheDocument();
    expect(screen.getByTestId('input_age')).toBeInTheDocument();
    expect(screen.getByTestId('button_adduser')).toBeInTheDocument();
  });

  it('takes valid input', () => {
    const onAddUser = jest.fn();
    render(<AddUser onAddUser={onAddUser} />);

    fireEvent.change(screen.getByTestId('input_username'), {
      target: { value: 'Max' },
    });
    fireEvent.change(screen.getByTestId('input_age'), {
      target: { value: '31' },
    });

    expect(screen.getByTestId('input_username')).toContainHTML('Max');
    expect(screen.getByTestId('input_age')).toContainHTML('31');

    fireEvent.click(screen.getByTestId('button_adduser'));

    expect(screen.getByTestId('input_username')).toContainHTML('');
    expect(screen.getByTestId('input_age')).toContainHTML('');
    expect(onAddUser).toBeCalledWith('Max', '31');
  });

  describe('Add User: Negative cases', () => {
    beforeEach(() => {
      const onAddUser = jest.fn();
      render(<AddUser onAddUser={onAddUser} />);
    });

    it('gives error with blank username', () => {
      fireEvent.change(screen.getByTestId('input_age'), {
        target: { value: '31' },
      });

      expect(screen.getByTestId('input_age')).toContainHTML('31');

      fireEvent.click(screen.getByTestId('button_adduser'));

      expect(screen.getByText('Invalid input')).toBeInTheDocument();
      expect(
        screen.getByText(
          'Please enter a valid name and age (non-empty values).'
        )
      ).toBeInTheDocument();
    });

    it('gives error with blank age', () => {
      fireEvent.change(screen.getByTestId('input_username'), {
        target: { value: 'Max' },
      });

      expect(screen.getByTestId('input_username')).toContainHTML('Max');

      fireEvent.click(screen.getByTestId('button_adduser'));

      expect(screen.getByText('Invalid input')).toBeInTheDocument();
      expect(
        screen.getByText(
          'Please enter a valid name and age (non-empty values).'
        )
      ).toBeInTheDocument();
    });

    it('gives error with negative age', () => {
      fireEvent.change(screen.getByTestId('input_username'), {
        target: { value: 'Max' },
      });
      fireEvent.change(screen.getByTestId('input_age'), {
        target: { value: '-1' },
      });

      expect(screen.getByTestId('input_username')).toContainHTML('Max');
      expect(screen.getByTestId('input_age')).toContainHTML('-1');

      fireEvent.click(screen.getByTestId('button_adduser'));

      expect(screen.getByText('Invalid input')).toBeInTheDocument();
      expect(
        screen.getByText('Please enter a valid age (> 0).')
      ).toBeInTheDocument();

      //   screen.debug();
    });
  });
});
