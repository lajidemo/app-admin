const expireDate = 7*24*60*60*1000;

const judgeLoginExpired = () => {
  const now = Date.now()
  const nowDate = +localStorage.getItem('nowDate') || 0;
  const isExpire = expireDate + nowDate < now
  let flag
  if(!nowDate || isExpire){
    flag = true
  }else if(nowDate && !isExpire){
    flag = false
  }
  return flag
}

export default {
  judgeLoginExpired,
}