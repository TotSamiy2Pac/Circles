import React from 'react';
import Layout from "../../components/layout/layout";
import ChoiceComponent from "../choiceComponent/choiceComponent";
import './style.css';
import Button from "../../components/buttons/button";

const HomePage = () => {
    return (
        <Layout>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aspernatur, incidunt obcaecati possimus quia tenetur. Doloremque eveniet quasi vel voluptas voluptates. Debitis deleniti ex in quaerat quis! A aspernatur et, eum harum illo maxime nam quo totam voluptas voluptate? Amet blanditiis culpa cum deleniti deserunt dolores doloribus dolorum ex expedita impedit in itaque iure laborum maiores nobis nulla, odio officia perferendis perspiciatis quae quasi quibusdam quo totam veritatis, voluptatibus. Ad animi aperiam, atque aut debitis dolores ea eos error est et eveniet ex fugit harum illum inventore, ipsum laudantium mollitia odio perferendis quidem ratione repellat sequi sit sunt suscipit vel voluptate! At eius molestiae sint. Aut blanditiis consequatur cumque cupiditate excepturi, fuga harum hic impedit magnam maiores molestiae nam odio, quis quisquam rerum tenetur totam veniam voluptas voluptate voluptatem. Adipisci assumenda culpa expedita inventore ipsam, molestiae nemo quibusdam quisquam sequi tempore? Atque deserunt fugit vero? Aut beatae commodi consequuntur cum enim, error iure mollitia optio quo reiciendis reprehenderit rerum soluta, suscipit temporibus totam voluptatem voluptates? Assumenda cupiditate fugit laborum, neque possimus quibusdam! Accusantium, aliquid amet autem cupiditate dolorem, eaque id impedit incidunt ipsa minima mollitia, odit optio quos reiciendis soluta totam ut voluptatem? Ab consectetur corporis dolorem illo nam.</span>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h3>Home Page</h3>
            <div className={'btn-wrapper'}>
                <Button
                    name='Кружки и секции'
                    color='green'
                />
                <Button
                    name='Семейный досуг'
                    color='green'
                />
                <Button
                    name='Онлайн-курсы'
                    color='purple'
                />
                <Button
                    name='Детские лагеря'
                    color='indianred'
                />
            </div>
            <ChoiceComponent/>
        </Layout>
    );
};

export default HomePage;