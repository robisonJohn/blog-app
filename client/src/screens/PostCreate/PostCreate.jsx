import { useState } from 'react';
import './ProductCreate.css';
import Layout from '../../components/Layout/Layout';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../services/products';

const PostCreate = (props) => {

    const [post, setPost] = useState({
        title: '',
        description: '',
        imgURL: ''
    })

    const [isCreated, setCreated] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({
            ...post,
            [name]: value
        })
    }

    // start handle submit tomorrow
}