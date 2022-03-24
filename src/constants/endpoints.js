export const endpoints = {
  studentsList: ({ page, size, search, sortBy, sortDir }) => `page=${page}&size=${size}${search?.length ? `&search=${search}` : ''}${sortBy?.length ? `&sortBy=${sortBy}` : ''}${sortDir ? `&sortDir=${sortDir}` : ''}`
};
