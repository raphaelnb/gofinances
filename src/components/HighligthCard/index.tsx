import React from 'react'

import {
    Container,
    Header,
    Title,
    Icon,
    Content,
    Amount,
    LastTrasaction
} from './styles'

interface Props {
    type: 'up' | 'down' | 'total';
    title: string;
    amount: string;
    lastTransaction: string
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighLightCard({
    type,
    title,
    amount,
    lastTransaction
}: Props) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title>
                <Icon
                    name={icon[type]}
                    type={type}
                />
            </Header>

            <Content>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTrasaction type={type}>
                    {lastTransaction}
                </LastTrasaction>
            </Content>
        </Container>
    )
}