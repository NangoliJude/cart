import React from "react";
import { SectionA, SectionB, MainSection, Grid } from "./UI";
import { ProductList } from "./Product/ProductList";
import Total from "./Product/Total";
import { MainContext } from "./Context/MainContext";

const imageUrl =
  "https://1.bp.blogspot.com/-AlE6hQ_1d_c/W1Z3E1dQO1I/AAAAAAAAAyE/1RWVuhG1rgsAcBbmMNf2XsQE_YmfNMmogCLcBGAs/s1600/jude3.png";
const Main = () => {
  return (
    <MainSection>
      <SectionA>
        <Grid>
          <ProductList />
        </Grid>
      </SectionA>
      <SectionB>
        <MainContext.Consumer>
          {context => {
            const { total } = context.state;
            return (
              <React.Fragment>
                <Total total={total} />
              </React.Fragment>
            );
          }}
        </MainContext.Consumer>
      </SectionB>
    </MainSection>
  );
};

export { Main };
