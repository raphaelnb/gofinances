import React, { useState } from 'react'
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { TransactionBtn } from '../../components/Forms/TransactionBtn'
import { CategorySelect } from '../../components/Forms/CategorySelect'

import {
    Container,
    Header,
    Title,
    Form,
    Field,
    TransactionType
} from './styles'

export function Register() {
    const [transactionType, setTransactionType] = useState('')

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Field>
                    <Input
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="Preço"
                    />

                    <TransactionType>
                        <TransactionBtn
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionBtn
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionType>

                    <CategorySelect title="categoria" />
                </Field>

                <Button title="Enviar" />
            </Form>

        </Container>
    )
}
