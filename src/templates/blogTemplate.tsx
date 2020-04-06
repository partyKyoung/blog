import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import { DiscussionEmbed } from "disqus-react"

import "katex/dist/katex.min.css"

import theme from '../styles/theme';

import PageTemplate from '../components/template/PageTemplate';
import Seo from '../components/layout/Seo';

const PostHeader = styled.header`
  margin: 1.875rem 0;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid ${({theme}) => theme.border};

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.5;
  }

  span {
    font-size: 1rem;
    color: #72707F;
  }
`;

const PostArticle = styled.article`
  h2, h3, h4, h5, h6 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.85;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  p + h2, p + h3, p + h4, p + h6,
  ul + h2, ul + h3, ul + h4, ul + h5, ul + h6 {
    margin-top: 3.5rem;
  }

  ul {
    list-style-type: disc;
    margin-bottom: 1rem;
    padding-left: 2.5rem;

    ul {
      margin-bottom: 0;

      &:nth-of-type(2n - 1) {
        list-style-type: circle;
      }

      &:nth-of-type(2n){
        list-style-type: disc;
      }
    }
  }

  li {
    font-size: 1rem;
    line-height: 2;
    word-break: keep-all;
    overflow-wrap: break-word;

    p {
      margin-bottom: 0;
    }
  }
`;

const PostComment = styled.div`
  #disqus_thread {
    width: 100%;
    margin: 3rem auto 0;
  }
`;

export default function Template({
  data
}: any) {
  const { markdownRemark } = data
  const { fields, frontmatter, html } = markdownRemark
  const disqusConfig = {
    shortname: 'dev-kyoungah-com',
    config: {
      url: `${process.env.BLOG_URL}${fields.slug}`,
      identifier: fields.slug,
      title: frontmatter.title 
    }
  };

  return (
    <>
    <Seo 
      title={frontmatter.title}
      description={frontmatter.description}
      url={`${process.env.BLOG_URL}${fields.slug}`}
    />
    <PageTemplate>
      <PostArticle>
        <PostHeader>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </PostHeader>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PostArticle>
      <PostComment>
      <DiscussionEmbed {...disqusConfig} />
      </PostComment>
    </PageTemplate>
    </>
  )
}

// grapthql을 이용하여 markdown에서 데이터를 가지고 온다.
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
      }
      fields {
        slug
      }
    }
  }
`