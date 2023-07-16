import React, { useEffect, useRef } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.css';
import $ from 'jquery';
import 'datatables.net';

import ChartsDetails from "../Charts/ChartsDetails";
import ChartsContainer from '../Charts/ChartsContainer';

const DataTableEl = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (!tableRef.current) return;

    $(tableRef.current).DataTable();
  }, []);

  return (
    <ChartsContainer detail={ChartsDetails[3]}>


      <table ref={tableRef} id="example" className='display'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>Software Engineer</td>
            <td>New York</td>
            <td>30</td>
            <td>2020/01/15</td>
            <td>$90,000</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>UX Designer</td>
            <td>San Francisco</td>
            <td>28</td>
            <td>2019/09/10</td>
            <td>$80,000</td>
          </tr>
          <tr>
            <td>Mike Johnson</td>
            <td>Project Manager</td>
            <td>Chicago</td>
            <td>35</td>
            <td>2018/03/20</td>
            <td>$110,000</td>
          </tr>
          <tr>
            <td>Sara Lee</td>
            <td>Data Analyst</td>
            <td>Los Angeles</td>
            <td>26</td>
            <td>2022/02/05</td>
            <td>$75,000</td>
          </tr>
          <tr>
            <td>Mark Johnson</td>
            <td>Frontend Developer</td>
            <td>Seattle</td>
            <td>29</td>
            <td>2017/11/12</td>
            <td>$95,000</td>
          </tr>
          <tr>
            <td>Emily Wilson</td>
            <td>Graphic Designer</td>
            <td>Miami</td>
            <td>24</td>
            <td>2020/08/30</td>
            <td>$70,000</td>
          </tr>
          <tr>
            <td>Chris Anderson</td>
            <td>Database Administrator</td>
            <td>Dallas</td>
            <td>33</td>
            <td>2016/05/18</td>
            <td>$100,000</td>
          </tr>
          <tr>
            <td>Amy Davis</td>
            <td>Marketing Manager</td>
            <td>Atlanta</td>
            <td>27</td>
            <td>2021/12/01</td>
            <td>$85,000</td>
          </tr>
          <tr>
            <td>Michael Brown</td>
            <td>Quality Assurance</td>
            <td>Houston</td>
            <td>31</td>
            <td>2015/08/21</td>
            <td>$88,000</td>
          </tr>
          <tr>
            <td>Jennifer Martinez</td>
            <td>HR Manager</td>
            <td>Denver</td>
            <td>39</td>
            <td>2014/06/17</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>Jason Clark</td>
            <td>Backend Developer</td>
            <td>Boston</td>
            <td>32</td>
            <td>2013/10/05</td>
            <td>$92,000</td>
          </tr>
          <tr>
            <td>Emma Wilson</td>
            <td>Product Manager</td>
            <td>Phoenix</td>
            <td>37</td>
            <td>2010/12/13</td>
            <td>$105,000</td>
          </tr>
          <tr>
            <td>Matthew Turner</td>
            <td>UX Designer</td>
            <td>Portland</td>
            <td>25</td>
            <td>2022/06/25</td>
            <td>$78,000</td>
          </tr>
          <tr>
            <td>Olivia White</td>
            <td>Frontend Developer</td>
            <td>San Diego</td>
            <td>27</td>
            <td>2019/01/30</td>
            <td>$85,000</td>
          </tr>
          <tr>
            <td>William Davis</td>
            <td>System Administrator</td>
            <td>Las Vegas</td>
            <td>36</td>
            <td>2018/05/11</td>
            <td>$95,000</td>
          </tr>
          <tr>
            <td>Sophia Rodriguez</td>
            <td>Marketing Specialist</td>
            <td>Austin</td>
            <td>29</td>
            <td>2017/07/19</td>
            <td>$80,000</td>
          </tr>
          <tr>
            <td>Liam Martinez</td>
            <td>Software Engineer</td>
            <td>San Francisco</td>
            <td>28</td>
            <td>2016/04/05</td>
            <td>$90,000</td>
          </tr>
          <tr>
            <td>Isabella Johnson</td>
            <td>UX Designer</td>
            <td>New York</td>
            <td>26</td>
            <td>2020/09/20</td>
            <td>$80,000</td>
          </tr>
          <tr>
            <td>Ethan Brown</td>
            <td>Frontend Developer</td>
            <td>Seattle</td>
            <td>31</td>
            <td>2019/03/15</td>
            <td>$95,000</td>
          </tr>
        </tbody>
      </table>
    </ChartsContainer>
  );
};

export default DataTableEl;
