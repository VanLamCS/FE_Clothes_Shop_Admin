import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import SliderImage from "../../components/Home/SliderImage";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import CategoryLayout from "@/components/Category/CategoryLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCategories } from "../api";
import { useEffect, useState } from "react";

const Category: React.FC = () => {

  const [categories, setCategories] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await getCategories();
      setCategories(res.data.categories);
    }

    fetchData();
  }, [reload]);
  return (
    <>
      <Layout>
        <Box className="container">
          <Box className="container">
            <Typography
              sx={{ paddingBottom: { xs: "1rem", md: "5rem" } }}
              className={styles.title}
            >
              DANH MỤC
            </Typography>
            <CategoryLayout categories={categories} reload={reload} setReload={setReload} />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Category;