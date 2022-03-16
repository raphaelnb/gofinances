import React, { useState } from 'react'
import { Modal } from 'react-native'
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { TransactionBtn } from '../../components/Forms/TransactionBtn'
import { CategorySelectBtn } from '../../components/Forms/CategorySelectBtn'

import { CategorySelect } from '../CategorySelect'

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
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
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

                    <CategorySelectBtn
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Field>

                <Button title="Enviar" />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>

        </Container>
    )
}
