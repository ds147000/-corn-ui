const Page: React.FC = () => {
  return (
    <div
      className="scope-page"
      dangerouslySetInnerHTML={{
        __html: `<!--
 * @Description:
 * @Author: zhoulong.yang
 * @Date: 2021-06-10 19:52:34
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-06-10 19:52:38
-->
`,
      }}
    />
  )
}

export default Page
