import React from 'react'
import Button from '@atlaskit/button'
import styled, {css} from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'
//Tạo 1 style bọc Button để chỉnh css
const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
    &, &:hover{
        ${(p) =>
            p.isCompleted && 
            css`
                text-decoration: line-through;
            `
        }
    }
    

    &:hover{
        .check-icon {
            display: inline-block
        }
    }

    .check-icon{
        display: none;
    }

    &:hover {
        background-color: silver;
        border-radius: 3px;
    }
`

export default function TodoItem({propTodoItem, propCheckBtnClick}) {
    return (
    <ButtonStyled
        isCompleted = {propTodoItem.isCompleted}
        shouldFitContainer
        iconAfter={
            propTodoItem.isCompleted || (
            <span className='check-icon' onClick={() => propCheckBtnClick(propTodoItem.id)}>
                <CheckIcon primaryColor='green' />
            </span>
        )
        }
    >
        {propTodoItem.name}
    </ButtonStyled>
  )
}
