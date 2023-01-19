import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Button } from "./Button";

describe('Testing Button', () => {
    it('render component Button', () => {
        render(<Button>Change Theme</Button>)
    })
    it('render with snapshot', () => {
        const {asFragment} = render(<Button>Change Theme</Button>)
        expect(asFragment()).toMatchSnapshot()
    })
    it('render component wiht text name button', () => {
        render(<Button>Change Theme</Button>)
        expect(screen.getByText(/Change Theme/)).toBeInTheDocument()
    })
    it('render multiply component', () => {
        render (
            <> 
            <Button>Change Theme</Button>
            <Button>Add message</Button>
            </>
        )
        expect(screen.queryAllByRole('button').length).toBe(2)
    })
    it('button is disable', () => {

        render(<Button disabled>Delete</Button>)
        expect(screen.getByText(/Delete/)).toBeDisabled()
    })
    it('button have style backgroundColor rgb(163, 102, 163)', () => {
        render(<Button>Add message</Button>)
        expect(screen.getByText(/Add message/)).toHaveStyle({ backgroundColor: 'rgb(163, 102, 163)'})
    })
    // it('button click with userEvent', async () => {
    //     const mockHandler = jest.fn()
    
    //     render(<Button click={mockHandler}>Delete</Button>)
    //     await userEvent.click(screen.getByText(/Delete/))
    //     expect(mockHandler).toHaveBeenCalledTimes(1)
    //   })
    it('test checkbox on double click', async() => {
        const onChange = jest.fn()
        render(<input type="checkbox" onChange={onChange} />)

        const checkbox = screen.getByRole('checkbox')
        await userEvent.dblClick(checkbox)
        expect(onChange).toHaveBeenCalledTimes(2)
        expect(checkbox).not.toBeChecked()
    })
})