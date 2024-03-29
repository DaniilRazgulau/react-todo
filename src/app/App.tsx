import { Route, Routes } from 'react-router-dom'
import { Main } from '../modules/main'
import { Post } from '../modules/post'
import { Catalog } from '../modules/catalog'
import './App.css'
import { Layout } from './Layout'
import { Todo } from '../modules/todo'
import { useState } from 'react'
import { TodoCountContext } from './context/TodoCountContext'

export const App = () => {
    const [countTodo, setCountTodo] = useState<number>(0)

    const [isLoading, setIsLoading] = useState<boolean>(true);    

    const onChangeCountTodo = (newCount: number) => {
        setCountTodo(newCount)
    }

    const onChangeLoading = (loading: boolean) => {
        setIsLoading(loading)
    }

    return (
        <TodoCountContext.Provider value={{countTodo, onChangeCountTodo, isLoading, onChangeLoading}}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/post" element={<Post />}/>
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/todo" element={<Todo />}/>
                </Route>
            </Routes>
        </TodoCountContext.Provider>
    )
}