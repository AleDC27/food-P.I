// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import s from "./detail.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { detailId } from "../redux/action/action";
// import { Link } from "react-router-dom";

// export default function Detail() {
//   const { id } = useParams();
//   const recipeDetail = useSelector((state) => state.recipeDetail);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(detailId(id));
//   }, [id]);
//   console.log(recipeDetail && recipeDetail.steps);

//   return (
//     <div className={s.containerd}>
//       {recipeDetail && (
//         <div className={s.contend_card}>
//           <h1>{recipeDetail.name}</h1>
//           <img src={recipeDetail.image} alt="image food" />
//           <span>{recipeDetail.healthScore}</span>
//         </div>
//       )}
//       <Link to="/home">Home</Link>
//       <div className={s.contend_summary}>
//         {recipeDetail && (
//           <div>
//             <span>
//               DishTypes : 
//               {recipeDetail.dishTypes &&
//                 recipeDetail.dishTypes.map((cur) => <> {cur}, </>)}{" "}
//             </span>
//             .<br />
//             <span>{recipeDetail.summary}</span>
//           </div>
//         )}
//       </div>
//       {recipeDetail && (
//         <div className={s.content_steps}>
//           <h1>steps</h1>
//           {recipeDetail.steps.map((cur) => {
//             return (
//               <div key={cur.number}>
//                 <h3>paso numero {cur.number} </h3>
//                 <span>{cur.step}</span>
//                 {cur.ingredients &&
//                   cur.ingredients.map((ing) => {
//                     return (
//                       <div key={ing.id}>
//                         <h3>{ing.name}</h3>
//                         {/*                     <img src={ing.image} alt="" /> */}
//                       </div>
//                     );
//                   })}
//                 {cur.length && (
//                   <span>
//                     {cur.length.number}
//                     {cur.length.unit}
//                   </span>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//       <div className={s.content_steps}></div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { detailId } from "../redux/action/action";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const recipesAll = useSelector((state) => state.recipesAll);

  const recipeDetail=recipesAll.find(cur=>cur.id===Number(id));

  return (
    <div className={s.containerd}>
      {recipeDetail && (
        <div className={s.contend_card}>
          <div className={s.contend_card_img}> 
            <img src={recipeDetail.image} alt="image food" />
            </div>
            <div className={s.contend_card_datos}>
            <h1>{recipeDetail.name}</h1>
          <h4>Health score : {recipeDetail.healthScore}</h4>
          <h4>
              Dish types : 
              {recipeDetail.dishTypes &&
                recipeDetail.dishTypes.map((cur) => <span key={cur}> {cur}, </span>)}
            .</h4>
            <h4>Diets: {recipeDetail.diets &&
                recipeDetail.diets.map((cur) => <span key={cur}> {cur}, </span>)} </h4>
                <Link to="/home" style={{textDecoration:"none"}} >Home</Link>
            </div>
        </div>
      )}


      <div className={s.contend_summary_steps}>
      <div className={s.contend_summary}>
        {recipeDetail && (
          <div>
            <h1>Summary</h1>
            .<br />
            <span>{recipeDetail.summary}</span>
          </div>
        )}
      </div>
      {recipeDetail && (
        <div className={s.content_steps}>
          <h1>Steps</h1>
          {recipeDetail.steps.map((cur) => {
            return (
              <div key={cur.number} className={s.step_card}>
                <h3>Step number {cur.number} </h3>
                <span>{cur.step}</span>
                <h4>Ingredients</h4>
                {cur.ingredients &&
                  cur.ingredients.map((ing) => {
                    return (
                      <span key={ing.id}>
                        {ing.name}
                        {/*                     <img src={ing.image} alt="" /> */}
                      </span>
                    );
                  })}
                {cur.length && (
                  <span>
                    {cur.length.number}
                    {cur.length.unit}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
      </div>

    </div>
  );
}
