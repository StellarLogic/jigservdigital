import React, { useState, useEffect, useRef } from "react";
import { Container, makeStyles, Typography, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import Slider from "react-slick";
import Axios from "../../utils/Axios";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import constants from "../../constants";

const Programs = ({
  categories: { data: categories, loading },
  setCompare,
  compare,
  removeCompare,
  removeAll,
  setminimize,
}) => {
  const [program, setprogram] = useState({ loading: true });
  const [activeSlider, setActiveSlider] = useState("s-1");
  const pillRef = useRef(null);
  const {
    parent,
    pill,
    count,
    bottom,
    slider,
    sliderParent,
    loadinProgram,
  } = useStyle();

  useEffect(() => {
    Axios.get(`programs?sort=cat&page=1&cat_ids=1`)
      .then((res) => {
        console.log(res.data);
        return setprogram({ ...program, ...res.data, loading: false });
      })
      .catch((err) => {
        if (err) {
          setprogram({ loading: true });
        }
      });
  }, []);

  const handleClick = (id) => {
    Axios.get(`programs?sort=cat&cat_ids=${id}`)
      .then((res) => setprogram({ ...program, ...res.data, loading: false }))
      .catch((err) => {
        if (err) {
          setprogram({ loading: true });
        }
      });
  };

  const handleCompare = (program) => {
    const check = compare.data.filter((i) => i.id == program.id);
    setminimize(false);
    if (check.length) {
      const filterData = compare.data.filter((i) => i.id !== program.id);
      return removeCompare(filterData);
    }

    setCompare(program);
  };

  return (
    <div className={parent}>
      <Container>
        <Typography variant="h4">Explore Programs by Category</Typography>
        <Typography variant="h6">
          Explore Executive Education Programs to match your learning needs
          Choose
        </Typography>
        <Typography variant="button">from 475 programs</Typography>
        {!loading && (
          <div className={sliderParent} ref={pillRef}>
            <Slider {...settings} className={slider}>
              {categories.map((category, index) => (
                <div
                  className={`${pill} ${
                    activeSlider == `s-${category.id}` ? "active" : ""
                  }`}
                  key={category.id}
                  onClick={() => (
                    handleClick(category.id),
                    setActiveSlider(`s-${category.id}`),
                    removeAll()
                  )}
                >
                  {category.attributes.name}
                  <span className={count}>
                    {category.attributes.programs_count}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        )}
        <div className={`programs`}>
          <Grid container spacing={5}>
            {!loading ? (
              program.data &&
              program.data.map(({ id, attributes }) => {
                const check = compare.data.some((data) => data.id == id);

                return (
                  <ProgramCard
                    key={id}
                    {...attributes}
                    checkedStatus={check}
                    onChange={() => handleCompare({ id, attributes })}
                  />
                );
              })
            ) : (
              <Grid className={`${loading ? loadinProgram : ""}`}>
                <CircularProgress
                  variant="determinate"
                  className={bottom}
                  size={40}
                  thickness={4}
                  value={100}
                />
              </Grid>
            )}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  infinite: true,
};

const useStyle = makeStyles((theme) => ({
  parent: {
    padding: "100px 0",
    background: theme.palette.colors.secondary,
    color: theme.palette.common.white,
  },
  loadinProgram: {
    minHeight: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  pill: {
    background: theme.palette.colors.primary,
    padding: "10px",
    borderRadius: "100px",
    textAlign: "center",
    cursor: "pointer",
    marginRight: "20px",
    border: `2px solid ${theme.palette.colors.primary}`,
    width: "90% !important",
    "&:hover": {
      background: theme.palette.common.white,
      color: theme.palette.colors.primary,
      "& $count": {
        background: theme.palette.colors.primary,
        color: theme.palette.common.white,
      },
    },
    "&.active": {
      background: theme.palette.common.white,
      color: theme.palette.colors.primary,
      "& $count": {
        background: theme.palette.colors.primary,
        color: theme.palette.common.white,
      },
    },
  },
  count: {
    background: theme.palette.common.white,
    color: theme.palette.colors.secondary,
    padding: "5px 10px",
    borderRadius: "100px",
    marginLeft: "10px",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    width: "fit-content",
  },
  sliderParent: {
    margin: "20px 0",
    "& div:focus": {
      outline: "none",
    },
  },
}));

const mapStateToProps = (state) => ({
  categories: state.common.categories,
  compare: state.compare,
});

const mapDispatchToProps = (dispatch) => ({
  setCompare: (payload) =>
    dispatch({
      type: constants.SETCOMPARE,
      payload,
    }),
  removeCompare: (payload) =>
    dispatch({
      type: constants.REMOVECOMPARE,
      payload,
    }),
  removeAll: () =>
    dispatch({
      type: constants.REMOVEALLCOMPARE,
    }),
  setminimize: (payload) =>
    dispatch({
      type: constants.SETMINIMISZED,
      payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Programs);
